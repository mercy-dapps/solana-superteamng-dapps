"use client";

import { useState, useEffect, useContext } from "react";
import { ResourceContext } from "../context/resourceContext";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PrimaryButton, SecondaryButton } from "./Button";

const CourseQuestion = ({ params, onClick }) => {
  const { courses, updateCertificateLink } = useContext(ResourceContext);

  const findMatchCourse = courses.find(
    (course) => course.course_id == params.id
  );

  const nftImageUrl =
    "https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk=";
  const nftExternalUrl = "https://solana-superteamng-dapps.vercel.app";

  const [apiUrl, setApiUrl] = useState("");
  const [nft, setNft] = useState(null);
  const [nftImage, setNftImage] = useState("");

  // get user info from wallet provider
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  // create compressed nft
  const mintCompressedNft = async (event) => {
    // prevent react app from resetting
    event.preventDefault();

    // make api call to create cNFT
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "helius-fe-course",
        method: "mintCompressedNft",
        params: {
          name: `${findMatchCourse.certificate.name}`,
          symbol: `${findMatchCourse.certificate.symbol}`,
          owner: publicKey,
          description: `${findMatchCourse.certificate.description}`,
          attributes: [
            {
              trait_type: "Cool Courses",
              value: "Learn Web3 made easy!",
            },
          ],
          imageUrl: nftImageUrl,
          externalUrl: nftExternalUrl,
          sellerFeeBasisPoints: 6900,
        },
      }),
    });

    const { result } = await response.json();

    if (!result) {
      toast.error("Request failed");
      throw "Request failed";
    }

    setNft(result.assetId);

    fetchNFT(result.assetId, event);
  };

  // fetch nft after it's minted
  const fetchNFT = async (assetId, event) => {
    // prevent app from reloading
    event.preventDefault();

    // api call to fetch nft
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "applicaiton/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "my-id",
        method: "getAsset",
        params: {
          id: assetId,
        },
      }),
    });

    // extrapolate api response
    const { result } = await response.json();

    // set nft image in state variable
    setNftImage(result.content.links.image);

    // return api result
    return { result };
  };

  // display function outputs to ui
  const outputs = [
    {
      title: "Asset ID...",
      dependency: nft,
      href: `https://xray.helius.xyz/token/${nft}?network=devnet`,
    },
  ];

  // set api url onload
  useEffect(() => {
    setApiUrl(
      connection?.rpcEndpoint.includes("devnet")
        ? "https://devnet.helius-rpc.com/?api-key=91186518-dcf4-4225-aab8-873e54679040"
        : "https://mainnet.helius-rpc.com/?api-key=91186518-dcf4-4225-aab8-873e54679040"
    );
  }, [connection]);

  useEffect(() => {
    if (nft) {
      updateCertificateLink(
        `https://xray.helius.xyz/token/${nft}?network=devnet`,
        findMatchCourse.course_id
      );
    }
  }, [nft]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(findMatchCourse.questions?.length).fill(null)
  );
  const [score, setScore] = useState(0);

  const handleOptionChange = (event) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = parseInt(event.target.value);
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = selectedAnswers[currentQuestion];
    if (answer === findMatchCourse.questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < findMatchCourse.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderQuestion = () => {
    const question = findMatchCourse.questions[currentQuestion];
    return (
      <div>
        <h2>{question.question}</h2>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                value={index}
                checked={selectedAnswers[currentQuestion] === index}
                onChange={handleOptionChange}
              />
              {option}
            </li>
          ))}
        </ul>

        <PrimaryButton text={"Submit Answer"} onClick={handleSubmit} />
      </div>
    );
  };

  return (
		<div className="backdrop-blur bg-[#00000047] fixed inset-x-0 inset-y-0 mx-auto w-full ">
			<div className="mx-auto w-[50%] h-[70%] my-16 bg-white p-10 flex flex-col rounded-lg">
				<p
					onClick={onClick}
					className="font-medium rounded-full px-2 border text-[#373636] border-[#373636] self-end cursor-pointer py-1 text-sm"
				>
					X
				</p>
				<form>
					<h2 className="text-2xl font-semibold py-3">Course Questions</h2>
					{score != findMatchCourse.questions.length && (
						<div>
							{currentQuestion < findMatchCourse.questions.length ? (
								renderQuestion()
							) : (
								<p>You finished the quiz!</p>
							)}
						</div>
					)}
					{currentQuestion + 1 === findMatchCourse.questions.length && (
						<p>
							Your score is {score} out of{" "}
							{findMatchCourse.questions.length}{" "}
						</p>
					)}
					<div className="flex flex-row items-center gap-4">
						{score === findMatchCourse.questions.length && (
							<PrimaryButton
								text={"Get Certificate"}
								onClick={(event) => mintCompressedNft(event)}
							/>
						)}
						{score < findMatchCourse.questions.length &&
							currentQuestion + 1 ===
								findMatchCourse.questions.length && (
								<SecondaryButton text={"Retake"} />
							)}
					</div>
				</form>
				<div className="mt-8 bg-[#222524] border-2 border-gray-500 rounded-lg p-4 h-[300px] flex justify-center items-center">
					{nftImage ? ( // if nftImage exists, render image, otherwise render text
						<img
							width={300}
							height={300}
							src={nftImage}
							className="rounded-lg border-2 border-gray-500"
						/>
					) : (
						<p className="border-2 border-gray-500 text-gray-500 p-2 rounded-lg">
							NFT Image Goes Here
						</p>
					)}
				</div>
				{outputs.map(({ dependency, href }, index) => (
					<div key={index}>
						{dependency && (
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex text-[#80ebff] italic hover:text-white transition-all duration-200"
							>
								{dependency.toString().slice(0, 25)}...
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						)}
					</div>
				))}
			</div>
		</div>
  );
};

export default CourseQuestion;

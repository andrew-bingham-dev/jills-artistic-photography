interface LogoProps {
	type: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ type }) => {
	const color = type === "light" ? "my-light-beige" : "my-dark-blue";

	return (
		<div className={`${color}`}>
			<svg
				width="136"
				height="38"
				viewBox="0 0 136 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M44.5347 12.468L43.8707 14.508H45.1827L44.5347 12.468ZM42.2867 16.5V16.068L42.9347 15.972L44.5587 11.236H45.3827L47.0227 16.028L47.5107 16.084V16.5H45.0387V16.084L45.6547 16.004L45.3267 14.972H43.7187L43.3987 15.972L44.0067 16.068V16.5H42.2867ZM52.3657 11.708H52.0457C52.0404 12.0387 52.035 12.3693 52.0297 12.7C52.0297 13.0253 52.0297 13.3373 52.0297 13.636H52.3337C52.6004 13.636 52.8084 13.5907 52.9577 13.5C53.107 13.4093 53.2137 13.2893 53.2777 13.14C53.3417 12.9907 53.3737 12.8307 53.3737 12.66C53.3737 12.0253 53.0377 11.708 52.3657 11.708ZM50.0937 11.676V11.244H52.6937C53.323 11.244 53.8057 11.3613 54.1417 11.596C54.483 11.8307 54.6537 12.156 54.6537 12.572C54.6537 12.748 54.6084 12.924 54.5177 13.1C54.427 13.2707 54.2777 13.4227 54.0697 13.556C53.8617 13.684 53.579 13.7773 53.2217 13.836C53.5257 13.8733 53.763 13.948 53.9337 14.06C54.1044 14.1667 54.2324 14.308 54.3177 14.484C54.403 14.6547 54.4644 14.8653 54.5017 15.116L54.6537 16.004L55.2617 16.068V16.5C55.1337 16.5267 55.027 16.548 54.9417 16.564C54.8564 16.5853 54.771 16.5987 54.6857 16.604C54.6057 16.6093 54.5044 16.612 54.3817 16.612C54.0404 16.612 53.771 16.5533 53.5737 16.436C53.3817 16.3187 53.2644 16.1053 53.2217 15.796L53.0777 14.868C53.0404 14.6013 52.963 14.404 52.8457 14.276C52.7337 14.148 52.5577 14.084 52.3177 14.084H52.0297C52.0297 14.4253 52.0297 14.7533 52.0297 15.068C52.035 15.3827 52.0404 15.6947 52.0457 16.004L52.6697 16.068V16.5H50.0937V16.068L50.6937 16.004C50.7044 15.6787 50.7097 15.3507 50.7097 15.02C50.7097 14.6893 50.7097 14.356 50.7097 14.02V13.724C50.7097 13.3933 50.7097 13.0627 50.7097 12.732C50.7097 12.396 50.7044 12.0653 50.6937 11.74L50.0937 11.676ZM57.3391 12.732L57.3711 11.244H62.0671L62.0911 12.732H61.4271L61.2831 11.692H60.4031C60.3977 12.0227 60.3924 12.3587 60.3871 12.7C60.3871 13.036 60.3871 13.3773 60.3871 13.724V14.012C60.3871 14.3427 60.3871 14.6733 60.3871 15.004C60.3924 15.3347 60.3977 15.6653 60.4031 15.996L61.0911 16.068V16.5H58.3471V16.068L59.0271 15.996C59.0377 15.6707 59.0431 15.3427 59.0431 15.012C59.0431 14.6813 59.0431 14.3507 59.0431 14.02V13.724C59.0431 13.388 59.0431 13.052 59.0431 12.716C59.0431 12.3747 59.0377 12.0333 59.0271 11.692H58.1551L58.0031 12.732H57.3391ZM64.7534 11.676V11.244H67.3294V11.676L66.7294 11.74C66.724 12.0653 66.7187 12.3933 66.7134 12.724C66.7134 13.0547 66.7134 13.388 66.7134 13.724V14.012C66.7134 14.3427 66.7134 14.676 66.7134 15.012C66.7187 15.3427 66.724 15.6733 66.7294 16.004L67.3294 16.068V16.5H64.7534V16.068L65.3534 16.004C65.364 15.6787 65.3694 15.3507 65.3694 15.02C65.3694 14.6893 65.3694 14.356 65.3694 14.02V13.724C65.3694 13.3933 65.3694 13.0627 65.3694 12.732C65.3694 12.396 65.364 12.0653 65.3534 11.74L64.7534 11.676ZM71.8389 16.652C71.5403 16.652 71.2336 16.6173 70.9189 16.548C70.6043 16.4787 70.3323 16.372 70.1029 16.228L70.1509 15.044H70.8949L71.0549 16.028C71.1776 16.076 71.3003 16.1133 71.4229 16.14C71.5456 16.1613 71.6816 16.172 71.8309 16.172C72.1189 16.172 72.3376 16.1 72.4869 15.956C72.6363 15.8067 72.7109 15.6253 72.7109 15.412C72.7109 15.1987 72.6549 15.0333 72.5429 14.916C72.4363 14.7987 72.2629 14.6867 72.0229 14.58L71.6789 14.428C71.2096 14.2093 70.8443 13.9667 70.5829 13.7C70.3269 13.4333 70.1989 13.0787 70.1989 12.636C70.1989 12.156 70.3776 11.78 70.7349 11.508C71.0976 11.2307 71.5803 11.092 72.1829 11.092C72.4709 11.092 72.7456 11.1293 73.0069 11.204C73.2736 11.2733 73.5029 11.372 73.6949 11.5L73.6309 12.62H72.8949L72.7429 11.676C72.6576 11.644 72.5723 11.62 72.4869 11.604C72.4016 11.5827 72.3083 11.572 72.2069 11.572C71.9776 11.572 71.7829 11.6387 71.6229 11.772C71.4629 11.9053 71.3829 12.0813 71.3829 12.3C71.3829 12.5133 71.4443 12.684 71.5669 12.812C71.6949 12.9347 71.8763 13.0493 72.1109 13.156L72.4869 13.324C72.9936 13.5533 73.3589 13.796 73.5829 14.052C73.8123 14.3027 73.9269 14.6307 73.9269 15.036C73.9269 15.5053 73.7483 15.892 73.3909 16.196C73.0389 16.5 72.5216 16.652 71.8389 16.652ZM76.4263 12.732L76.4583 11.244H81.1543L81.1783 12.732H80.5143L80.3703 11.692H79.4903C79.4849 12.0227 79.4796 12.3587 79.4743 12.7C79.4743 13.036 79.4743 13.3773 79.4743 13.724V14.012C79.4743 14.3427 79.4743 14.6733 79.4743 15.004C79.4796 15.3347 79.4849 15.6653 79.4903 15.996L80.1783 16.068V16.5H77.4343V16.068L78.1143 15.996C78.1249 15.6707 78.1303 15.3427 78.1303 15.012C78.1303 14.6813 78.1303 14.3507 78.1303 14.02V13.724C78.1303 13.388 78.1303 13.052 78.1303 12.716C78.1303 12.3747 78.1249 12.0333 78.1143 11.692H77.2423L77.0903 12.732H76.4263ZM83.8406 11.676V11.244H86.4166V11.676L85.8166 11.74C85.8112 12.0653 85.8059 12.3933 85.8006 12.724C85.8006 13.0547 85.8006 13.388 85.8006 13.724V14.012C85.8006 14.3427 85.8006 14.676 85.8006 15.012C85.8059 15.3427 85.8112 15.6733 85.8166 16.004L86.4166 16.068V16.5H83.8406V16.068L84.4406 16.004C84.4512 15.6787 84.4566 15.3507 84.4566 15.02C84.4566 14.6893 84.4566 14.356 84.4566 14.02V13.724C84.4566 13.3933 84.4566 13.0627 84.4566 12.732C84.4566 12.396 84.4512 12.0653 84.4406 11.74L83.8406 11.676ZM91.8568 16.652C91.3448 16.652 90.8781 16.5507 90.4568 16.348C90.0354 16.14 89.6994 15.8307 89.4488 15.42C89.2034 15.0093 89.0808 14.492 89.0808 13.868C89.0808 13.3933 89.1554 12.9827 89.3048 12.636C89.4594 12.2893 89.6674 12.0013 89.9288 11.772C90.1954 11.5427 90.4994 11.372 90.8408 11.26C91.1821 11.148 91.5394 11.092 91.9128 11.092C92.2168 11.092 92.4941 11.1267 92.7448 11.196C92.9954 11.26 93.2408 11.3587 93.4808 11.492L93.5128 12.732H92.9048L92.6728 11.684C92.4914 11.5933 92.2994 11.548 92.0968 11.548C91.8141 11.548 91.5501 11.628 91.3048 11.788C91.0648 11.948 90.8701 12.2013 90.7208 12.548C90.5714 12.8893 90.4968 13.332 90.4968 13.876C90.4968 14.42 90.5688 14.8627 90.7128 15.204C90.8568 15.54 91.0461 15.788 91.2808 15.948C91.5208 16.108 91.7821 16.188 92.0648 16.188C92.1768 16.188 92.2888 16.1747 92.4008 16.148C92.5128 16.1213 92.6248 16.084 92.7368 16.036L92.9608 15.012H93.5688L93.5368 16.244C93.3234 16.3613 93.0754 16.4573 92.7928 16.532C92.5154 16.612 92.2034 16.652 91.8568 16.652Z"
					fill="currentColor"
				/>
				<path
					d="M44.612 20.796H43.544C43.536 21.34 43.528 21.892 43.52 22.452C43.52 23.004 43.52 23.564 43.52 24.132V24.816H44.288C45.216 24.816 45.876 24.624 46.268 24.24C46.66 23.856 46.856 23.36 46.856 22.752C46.856 22.112 46.676 21.628 46.316 21.3C45.964 20.964 45.396 20.796 44.612 20.796ZM41.636 20.748V20.412H44.744C45.672 20.412 46.368 20.624 46.832 21.048C47.296 21.472 47.528 22.04 47.528 22.752C47.528 23.208 47.412 23.62 47.18 23.988C46.956 24.356 46.604 24.648 46.124 24.864C45.652 25.072 45.044 25.176 44.3 25.176H43.52C43.52 25.648 43.52 26.124 43.52 26.604C43.528 27.084 43.536 27.572 43.544 28.068L44.84 28.164V28.5H41.636V28.164L42.86 28.068C42.868 27.524 42.872 26.98 42.872 26.436C42.872 25.884 42.872 25.332 42.872 24.78V24.132C42.872 23.58 42.872 23.032 42.872 22.488C42.872 21.936 42.868 21.388 42.86 20.844L41.636 20.748ZM54.2152 20.748V20.412H57.3472V20.748L56.1232 20.844C56.1152 21.38 56.1072 21.924 56.0992 22.476C56.0992 23.028 56.0992 23.58 56.0992 24.132V24.78C56.0992 25.332 56.0992 25.884 56.0992 26.436C56.1072 26.98 56.1152 27.524 56.1232 28.068L57.3472 28.164V28.5H54.2152V28.164L55.4392 28.068C55.4472 27.524 55.4512 26.96 55.4512 26.376C55.4512 25.784 55.4512 25.144 55.4512 24.456H50.9872C50.9872 25.2 50.9872 25.86 50.9872 26.436C50.9952 27.004 51.0032 27.548 51.0112 28.068L52.2352 28.164V28.5H49.1032V28.164L50.3272 28.068C50.3352 27.524 50.3392 26.98 50.3392 26.436C50.3392 25.884 50.3392 25.332 50.3392 24.78V24.132C50.3392 23.58 50.3392 23.032 50.3392 22.488C50.3392 21.936 50.3352 21.388 50.3272 20.844L49.1032 20.748V20.412H52.2352V20.748L51.0112 20.844C51.0032 21.38 50.9952 21.924 50.9872 22.476C50.9872 23.02 50.9872 23.556 50.9872 24.084H55.4512C55.4512 23.5 55.4512 22.944 55.4512 22.416C55.4512 21.88 55.4472 21.356 55.4392 20.844L54.2152 20.748ZM62.5844 28.668C61.9444 28.668 61.3524 28.5 60.8084 28.164C60.2724 27.828 59.8404 27.344 59.5124 26.712C59.1924 26.08 59.0324 25.328 59.0324 24.456C59.0324 23.592 59.1924 22.848 59.5124 22.224C59.8404 21.592 60.2724 21.104 60.8084 20.76C61.3524 20.416 61.9444 20.244 62.5844 20.244C63.2324 20.244 63.8244 20.416 64.3604 20.76C64.9044 21.096 65.3364 21.58 65.6564 22.212C65.9844 22.836 66.1484 23.584 66.1484 24.456C66.1484 25.32 65.9844 26.068 65.6564 26.7C65.3364 27.324 64.9044 27.808 64.3604 28.152C63.8244 28.496 63.2324 28.668 62.5844 28.668ZM62.5844 28.26C63.0404 28.26 63.4444 28.16 63.7964 27.96C64.1484 27.752 64.4444 27.472 64.6844 27.12C64.9244 26.76 65.1044 26.352 65.2244 25.896C65.3444 25.44 65.4044 24.96 65.4044 24.456C65.4044 23.952 65.3444 23.472 65.2244 23.016C65.1044 22.56 64.9244 22.152 64.6844 21.792C64.4444 21.432 64.1484 21.152 63.7964 20.952C63.4444 20.744 63.0404 20.64 62.5844 20.64C62.1284 20.64 61.7244 20.744 61.3724 20.952C61.0284 21.152 60.7364 21.432 60.4964 21.792C60.2564 22.152 60.0764 22.56 59.9564 23.016C59.8364 23.472 59.7764 23.952 59.7764 24.456C59.7764 24.96 59.8364 25.44 59.9564 25.896C60.0764 26.352 60.2564 26.76 60.4964 27.12C60.7364 27.472 61.0284 27.752 61.3724 27.96C61.7244 28.16 62.1284 28.26 62.5844 28.26ZM67.6142 22.44L67.7222 20.412H74.1902L74.2982 22.44H73.8542L73.6262 20.808H71.2982C71.2902 21.352 71.2862 21.9 71.2862 22.452C71.2862 23.004 71.2862 23.564 71.2862 24.132V24.78C71.2862 25.332 71.2862 25.884 71.2862 26.436C71.2862 26.98 71.2902 27.524 71.2982 28.068L72.6422 28.164V28.5H69.2702V28.164L70.6142 28.068C70.6222 27.524 70.6262 26.98 70.6262 26.436C70.6262 25.884 70.6262 25.332 70.6262 24.78V24.132C70.6262 23.572 70.6262 23.016 70.6262 22.464C70.6262 21.904 70.6222 21.352 70.6142 20.808H68.2862L68.0582 22.44H67.6142ZM79.3235 28.668C78.6835 28.668 78.0915 28.5 77.5475 28.164C77.0115 27.828 76.5795 27.344 76.2515 26.712C75.9315 26.08 75.7715 25.328 75.7715 24.456C75.7715 23.592 75.9315 22.848 76.2515 22.224C76.5795 21.592 77.0115 21.104 77.5475 20.76C78.0915 20.416 78.6835 20.244 79.3235 20.244C79.9715 20.244 80.5635 20.416 81.0995 20.76C81.6435 21.096 82.0755 21.58 82.3955 22.212C82.7235 22.836 82.8875 23.584 82.8875 24.456C82.8875 25.32 82.7235 26.068 82.3955 26.7C82.0755 27.324 81.6435 27.808 81.0995 28.152C80.5635 28.496 79.9715 28.668 79.3235 28.668ZM79.3235 28.26C79.7795 28.26 80.1835 28.16 80.5355 27.96C80.8875 27.752 81.1835 27.472 81.4235 27.12C81.6635 26.76 81.8435 26.352 81.9635 25.896C82.0835 25.44 82.1435 24.96 82.1435 24.456C82.1435 23.952 82.0835 23.472 81.9635 23.016C81.8435 22.56 81.6635 22.152 81.4235 21.792C81.1835 21.432 80.8875 21.152 80.5355 20.952C80.1835 20.744 79.7795 20.64 79.3235 20.64C78.8675 20.64 78.4635 20.744 78.1115 20.952C77.7675 21.152 77.4755 21.432 77.2355 21.792C76.9955 22.152 76.8155 22.56 76.6955 23.016C76.5755 23.472 76.5155 23.952 76.5155 24.456C76.5155 24.96 76.5755 25.44 76.6955 25.896C76.8155 26.352 76.9955 26.76 77.2355 27.12C77.4755 27.472 77.7675 27.752 78.1115 27.96C78.4635 28.16 78.8675 28.26 79.3235 28.26ZM88.9333 28.668C88.1413 28.668 87.4453 28.488 86.8453 28.128C86.2533 27.768 85.7893 27.272 85.4533 26.64C85.1253 26.008 84.9613 25.28 84.9613 24.456C84.9613 23.632 85.1293 22.904 85.4653 22.272C85.8013 21.64 86.2693 21.144 86.8693 20.784C87.4773 20.424 88.1733 20.244 88.9573 20.244C89.4693 20.244 89.9133 20.3 90.2893 20.412C90.6653 20.524 91.0253 20.688 91.3693 20.904L91.4173 22.596H90.9493L90.7333 21.12C90.4853 20.96 90.2213 20.84 89.9413 20.76C89.6693 20.68 89.3613 20.64 89.0173 20.64C88.3613 20.64 87.7853 20.796 87.2893 21.108C86.7933 21.412 86.4053 21.852 86.1253 22.428C85.8453 22.996 85.7053 23.672 85.7053 24.456C85.7053 25.24 85.8413 25.916 86.1133 26.484C86.3853 27.052 86.7653 27.492 87.2533 27.804C87.7493 28.108 88.3333 28.26 89.0053 28.26C89.3493 28.26 89.6653 28.224 89.9533 28.152C90.2493 28.08 90.5453 27.968 90.8413 27.816V27.36C90.8413 26.984 90.8373 26.608 90.8293 26.232C90.8293 25.848 90.8253 25.468 90.8173 25.092L89.4493 25.008V24.672H92.3533V25.008L91.5133 25.08C91.5053 25.424 91.4973 25.78 91.4893 26.148C91.4893 26.516 91.4893 26.92 91.4893 27.36V27.948C91.0573 28.196 90.6413 28.38 90.2413 28.5C89.8493 28.612 89.4133 28.668 88.9333 28.668ZM96.8496 20.796H95.5776C95.5696 21.348 95.5616 21.916 95.5536 22.5C95.5536 23.076 95.5536 23.7 95.5536 24.372H96.8736C97.5056 24.372 98.0096 24.196 98.3856 23.844C98.7616 23.492 98.9496 23.052 98.9496 22.524C98.9496 21.988 98.7816 21.568 98.4456 21.264C98.1096 20.952 97.5776 20.796 96.8496 20.796ZM93.6696 20.748V20.412H96.8736C97.7536 20.412 98.4296 20.596 98.9016 20.964C99.3736 21.324 99.6096 21.844 99.6096 22.524C99.6096 23.052 99.4336 23.508 99.0816 23.892C98.7376 24.276 98.2496 24.524 97.6176 24.636C97.9296 24.716 98.1696 24.856 98.3376 25.056C98.5056 25.256 98.6536 25.548 98.7816 25.932L99.5136 28.08L100.594 28.164V28.5C100.514 28.524 100.402 28.544 100.258 28.56C100.122 28.576 99.9656 28.584 99.7896 28.584C99.4696 28.584 99.2416 28.54 99.1056 28.452C98.9696 28.356 98.8696 28.208 98.8056 28.008L98.1576 25.944C98.0696 25.64 97.9616 25.4 97.8336 25.224C97.7136 25.048 97.5496 24.924 97.3416 24.852C97.1336 24.772 96.8536 24.732 96.5016 24.732H95.5536C95.5536 25.356 95.5536 25.94 95.5536 26.484C95.5616 27.02 95.5696 27.548 95.5776 28.068L96.8016 28.164V28.5H93.6696V28.164L94.8936 28.068C94.9016 27.524 94.9056 26.98 94.9056 26.436C94.9056 25.884 94.9056 25.332 94.9056 24.78V24.132C94.9056 23.58 94.9056 23.032 94.9056 22.488C94.9056 21.936 94.9016 21.388 94.8936 20.844L93.6696 20.748ZM105.288 21.216L103.956 25.308H106.644L105.288 21.216ZM101.64 28.5V28.164L102.624 28.056L105.192 20.34H105.636L108.24 28.068L109.356 28.164V28.5H106.272V28.164L107.556 28.056L106.764 25.668H103.848L103.068 28.056L104.172 28.164V28.5H101.64ZM113.514 20.796H112.446C112.438 21.34 112.43 21.892 112.422 22.452C112.422 23.004 112.422 23.564 112.422 24.132V24.816H113.19C114.118 24.816 114.778 24.624 115.17 24.24C115.562 23.856 115.758 23.36 115.758 22.752C115.758 22.112 115.578 21.628 115.218 21.3C114.866 20.964 114.298 20.796 113.514 20.796ZM110.538 20.748V20.412H113.646C114.574 20.412 115.27 20.624 115.734 21.048C116.198 21.472 116.43 22.04 116.43 22.752C116.43 23.208 116.314 23.62 116.082 23.988C115.858 24.356 115.506 24.648 115.026 24.864C114.554 25.072 113.946 25.176 113.202 25.176H112.422C112.422 25.648 112.422 26.124 112.422 26.604C112.43 27.084 112.438 27.572 112.446 28.068L113.742 28.164V28.5H110.538V28.164L111.762 28.068C111.77 27.524 111.774 26.98 111.774 26.436C111.774 25.884 111.774 25.332 111.774 24.78V24.132C111.774 23.58 111.774 23.032 111.774 22.488C111.774 21.936 111.77 21.388 111.762 20.844L110.538 20.748ZM123.117 20.748V20.412H126.249V20.748L125.025 20.844C125.017 21.38 125.009 21.924 125.001 22.476C125.001 23.028 125.001 23.58 125.001 24.132V24.78C125.001 25.332 125.001 25.884 125.001 26.436C125.009 26.98 125.017 27.524 125.025 28.068L126.249 28.164V28.5H123.117V28.164L124.341 28.068C124.349 27.524 124.353 26.96 124.353 26.376C124.353 25.784 124.353 25.144 124.353 24.456H119.889C119.889 25.2 119.889 25.86 119.889 26.436C119.897 27.004 119.905 27.548 119.913 28.068L121.137 28.164V28.5H118.005V28.164L119.229 28.068C119.237 27.524 119.241 26.98 119.241 26.436C119.241 25.884 119.241 25.332 119.241 24.78V24.132C119.241 23.58 119.241 23.032 119.241 22.488C119.241 21.936 119.237 21.388 119.229 20.844L118.005 20.748V20.412H121.137V20.748L119.913 20.844C119.905 21.38 119.897 21.924 119.889 22.476C119.889 23.02 119.889 23.556 119.889 24.084H124.353C124.353 23.5 124.353 22.944 124.353 22.416C124.353 21.88 124.349 21.356 124.341 20.844L123.117 20.748ZM127.69 20.748V20.412H130.654V20.748L129.406 20.844L131.35 24.864L133.306 20.856L132.07 20.748V20.412H134.782V20.748L133.738 20.856L131.542 25.284C131.542 25.732 131.542 26.116 131.542 26.436C131.542 26.748 131.542 27.032 131.542 27.288C131.55 27.536 131.558 27.796 131.566 28.068L132.91 28.164V28.5H129.526V28.164L130.87 28.068C130.878 27.772 130.882 27.492 130.882 27.228C130.89 26.964 130.894 26.68 130.894 26.376C130.894 26.064 130.894 25.708 130.894 25.308L128.674 20.844L127.69 20.748Z"
					fill="currentColor"
				/>
				<path
					d="M7.68819 33.012V32.532C8.34419 32.5 8.90419 32.324 9.36819 32.004C9.84819 31.684 10.2082 31.14 10.4482 30.372C10.6882 29.604 10.8082 28.556 10.8082 27.228V14.052C10.8082 13.46 10.7602 13.028 10.6642 12.756C10.5842 12.468 10.4082 12.276 10.1362 12.18C9.86419 12.068 9.47219 12.004 8.96019 11.988V11.508C9.32819 11.524 9.81619 11.54 10.4242 11.556C11.0482 11.572 11.6962 11.58 12.3682 11.58C13.0402 11.58 13.6962 11.572 14.3362 11.556C14.9922 11.54 15.5282 11.524 15.9442 11.508V11.988C15.4162 12.004 15.0162 12.068 14.7442 12.18C14.4882 12.276 14.3122 12.468 14.2162 12.756C14.1362 13.028 14.0962 13.46 14.0962 14.052V22.836C14.0962 23.492 14.0882 24.204 14.0722 24.972C14.0722 25.74 14.0402 26.484 13.9762 27.204C13.9282 27.924 13.8322 28.556 13.6882 29.1C13.3842 30.22 12.7282 31.148 11.7202 31.884C10.7122 32.636 9.36819 33.012 7.68819 33.012ZM27.7177 11.508C27.6537 12.244 27.6057 12.964 27.5737 13.668C27.5577 14.356 27.5497 14.884 27.5497 15.252C27.5497 15.62 27.5577 15.964 27.5737 16.284C27.5897 16.604 27.6057 16.884 27.6217 17.124H27.0697C26.8457 15.844 26.5737 14.844 26.2537 14.124C25.9337 13.388 25.5097 12.86 24.9817 12.54C24.4697 12.22 23.7897 12.06 22.9417 12.06H22.1737V25.74C22.1737 26.396 22.2297 26.884 22.3417 27.204C22.4697 27.524 22.7177 27.74 23.0857 27.852C23.4537 27.948 23.9897 28.004 24.6937 28.02V28.5C24.2137 28.468 23.5897 28.452 22.8217 28.452C22.0537 28.436 21.2697 28.428 20.4697 28.428C19.6377 28.428 18.8537 28.436 18.1177 28.452C17.3977 28.452 16.8137 28.468 16.3657 28.5V28.02C17.0537 28.004 17.5817 27.948 17.9497 27.852C18.3177 27.74 18.5657 27.524 18.6937 27.204C18.8217 26.884 18.8857 26.396 18.8857 25.74V12.06H18.0937C17.2617 12.06 16.5817 12.22 16.0537 12.54C15.5257 12.86 15.1017 13.388 14.7817 14.124C14.4617 14.844 14.1977 15.844 13.9897 17.124H13.4377C13.4697 16.884 13.4857 16.604 13.4857 16.284C13.5017 15.964 13.5097 15.62 13.5097 15.252C13.5097 14.884 13.4937 14.356 13.4617 13.668C13.4457 12.964 13.4057 12.244 13.3417 11.508C14.0457 11.524 14.8217 11.54 15.6697 11.556C16.5177 11.572 17.3657 11.58 18.2137 11.58C19.0617 11.58 19.8377 11.58 20.5417 11.58C21.2297 11.58 21.9977 11.58 22.8457 11.58C23.6937 11.58 24.5417 11.572 25.3897 11.556C26.2377 11.54 27.0137 11.524 27.7177 11.508Z"
					fill="currentColor"
				/>
				<circle
					cx="18.4865"
					cy="19.0136"
					r="17.9865"
					stroke="currentColor"
				/>
			</svg>
		</div>
	);
};

export default Logo;

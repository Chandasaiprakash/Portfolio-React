export default function Contact() {
    return (
        <section id="contact"
            className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-black-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center  
                        my-10">
                <a rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href=
                    "https://instagram.com/Urs_truly_saiprakash">
                    Instagram:
                    <span className="font-bold">
                        @Chanda_sai_prakash
                    </span>
                </a>
                <a rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href=
                    "https://twitter.com/chandasaiprakash">
                    Twitter:
                    <span className="font-bold">
                        @Chandasaiprakash
                    </span>
                </a>
            </div>
        </section>
    );
}
import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary
  extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-center">

          <h1>
            Something went wrong.
          </h1>

          <button
            className="mt-4 rounded bg-black px-4 py-2 text-white"
            onClick={() =>
              window.location.reload()
            }
          >
            Retry
          </button>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
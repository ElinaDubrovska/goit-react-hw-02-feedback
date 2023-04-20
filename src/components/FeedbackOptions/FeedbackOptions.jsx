import { StyledButton, StyledList, StyledListItem } from "./FeedbackOptions.styled";

export const FeedbackOptions = (props) =>{
    const {variants, onClick} = props
    return(
        <StyledList>
      {variants.map(variant => {
        return (
          <StyledListItem key={variant}>
            <StyledButton
              type="button"
              name={variant}
              onClick={onClick}
              
            >
              {variant.toUpperCase()}
            </StyledButton>
          </StyledListItem>
        );
      })}
    </StyledList>)

    }

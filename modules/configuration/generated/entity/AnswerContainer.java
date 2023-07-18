package entity;

/**
 * AnswerContainer
 * A delegate for entities that hold answers to questions.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AnswerContainer.eti;AnswerContainer.eix;AnswerContainer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface AnswerContainer extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.AnswerContainer> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.AnswerContainer>("entity.AnswerContainer");
  
  /**
   * Checks all answers stored on this container against the availability of the questions defined in
   * the product model.
   * @return a list of issues encountered
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel();
  
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel(gw.api.productmodel.QuestionSet[] questionSetsToSync);
  
  
  /**
   * Clears any Question/QuestionFilter dependencies that have been cached. Should be
   * called before displaying a question set in the app.
   */
  public void clearQuestionDependencies();
  
  
  /**
   * Creates an answer for the given question and sets its value to the question's
   * default answer value, if any.
   * @param question the question to create an answer for
   * @throws IllegalStateException if an answer has already been allocated for the
   * question.
   * @return the created answer
   */
  public entity.PCAnswerDelegate createAnswer(gw.api.productmodel.Question question);
  
  
  /**
   * Returns the answer to the given question, or null if none has been allocated
   * yet.
   * @param question the question to get the answer for
   * @return the answer for the given question
   */
  public entity.PCAnswerDelegate getAnswer(gw.api.productmodel.Question question);
  
  
  /**
   * Gets the actual value of the answer. If the answer is undefined on this
   * entity, use the default answer if there is one, else null.
   * @param question the question to get the answer value for
   * @return the answer value
   */
  public java.lang.Object getAnswerValue(gw.api.productmodel.Question question);
  
  
  public entity.PCAnswerDelegate[] getAnswers();
  
  
  public entity.PolicyPeriod getAssociatedPolicyPeriod();
  
  
  /**
   * Recalculates question dependencies if they have been cleared (see {@link #clearQuestionDependencies}),
   * then returns all questions that are dependent on the given question's answers.
   * @param question the question to get dependencies for
   * @return the set of questions on which the given question depends
   */
  public java.util.Set<gw.api.productmodel.Question> getQuestionDependencies(gw.api.productmodel.Question question);
  
  
  public gw.api.productmodel.QuestionSet[] getQuestionSets();
  
  
  /**
   * Removes the answer, if any, to the specified question.
   * @param question the question to remove the answer for
   */
  public void removeAnswer(gw.api.productmodel.Question question);
  
  
  
}
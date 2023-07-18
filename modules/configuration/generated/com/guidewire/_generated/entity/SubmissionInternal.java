package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Submission.eti;Submission.eix;Submission.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface SubmissionInternal extends com.guidewire._generated.entity.JobInternal, com.guidewire.pc.domain.job.SubmissionPublicMethods, com.guidewire.pc.domain.job.impl.SubmissionInternalMethods {
  /**
   * Gets the value of the BindOption field.
   * Indicates how this submision was bound
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BindOption getBindOption();
  
  
  /**
   * Gets the value of the DateQuoteNeeded field.
   * Date a quote for this submission is needed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateQuoteNeeded();
  
  
  /**
   * Gets the value of the QuoteType field.
   * What kind of quote is the submission for
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.QuoteType getQuoteType();
  
  
  /**
   * Gets the value of the RejectReason field.
   * The reason that this job was rejected
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReasonCode getRejectReason();
  
  
  /**
   * Gets the value of the RejectReasonText field.
   * Text of the letter.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRejectReasonText();
  
  
  /**
   * Gets the value of the SubmissionDate field.
   * Date this submission was entered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getSubmissionDate();
  
  
  /**
   * Sets the value of the BindOption field.
   */
  public void setBindOption(typekey.BindOption value);
  
  
  /**
   * Sets the value of the DateQuoteNeeded field.
   */
  public void setDateQuoteNeeded(java.util.Date value);
  
  
  /**
   * Sets the value of the QuoteType field.
   */
  public void setQuoteType(typekey.QuoteType value);
  
  
  /**
   * Sets the value of the RejectReason field.
   */
  public void setRejectReason(typekey.ReasonCode value);
  
  
  /**
   * Sets the value of the RejectReasonText field.
   */
  public void setRejectReasonText(java.lang.String value);
  
  
  /**
   * Sets the value of the SubmissionDate field.
   */
  public void setSubmissionDate(java.util.Date value);
  
  
  
}
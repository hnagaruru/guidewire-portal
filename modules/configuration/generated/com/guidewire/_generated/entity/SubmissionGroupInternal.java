package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "SubmissionGroup.eti;SubmissionGroup.eix;SubmissionGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface SubmissionGroupInternal extends com.guidewire._generated.entity.JobGroupInternal, com.guidewire.pc.domain.job.group.SubmissionGroupPublicMethods {
  /**
   * Adds the given element to the Submissions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSubmissions(entity.Submission element);
  
  
  /**
   * Gets the value of the Submissions field.
   * The array of submissions in this submission group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Submission[] getSubmissions();
  
  
  /**
   * Removes the given element from the Submissions array. This is achieved by marking the element for removal.
   */
  public void removeFromSubmissions(entity.Submission element);
  
  
  /**
   * Removes the given element from the Submissions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSubmissions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Submissions field.
   */
  public void setSubmissions(entity.Submission[] value);
  
  
  
}
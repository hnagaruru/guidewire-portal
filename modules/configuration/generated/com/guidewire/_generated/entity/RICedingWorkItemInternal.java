package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICedingWorkItem.eti;RICedingWorkItem.eix;RICedingWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RICedingWorkItemInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.WorkItemInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the CommentText field.
   * Comment describing reason for a recalculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCommentText();
  
  
  /**
   * Gets the value of the RecalcReason field.
   * Reason for recalculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIRecalcReason getRecalcReason();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RICedingWorkItem getSubtype();
  
  
  /**
   * Gets the value of the RecalculateAll field.
   * True if this is a forced recalculation of all cedings against the entity, false if we should only calculate ceding against new Transactions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRecalculateAll();
  
  
  /**
   * Sets the value of the CommentText field.
   */
  public void setCommentText(java.lang.String value);
  
  
  /**
   * Sets the value of the RecalcReason field.
   */
  public void setRecalcReason(typekey.RIRecalcReason value);
  
  
  /**
   * Sets the value of the RecalculateAll field.
   */
  public void setRecalculateAll(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RICedingWorkItem value);
  
  
  
}
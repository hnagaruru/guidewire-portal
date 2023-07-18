package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICededPremiumHistory.eti;RICededPremiumHistory.eix;RICededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RICededPremiumHistoryInternal extends com.guidewire._generated.entity.ExtractableInternal {
  /**
   * Gets the value of the CommentText field.
   * Optional comment describing the reason for the recalculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCommentText();
  
  
  /**
   * Gets the value of the DateOfRecalculation field.
   * The date on which the recalculation was done.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfRecalculation();
  
  
  /**
   * Gets the value of the Reason field.
   * One of a list of defined reasons for performing recalculation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIRecalcReason getReason();
  
  
  /**
   * Sets the value of the CommentText field.
   */
  public void setCommentText(java.lang.String value);
  
  
  /**
   * Sets the value of the DateOfRecalculation field.
   */
  public void setDateOfRecalculation(java.util.Date value);
  
  
  /**
   * Sets the value of the Reason field.
   */
  public void setReason(typekey.RIRecalcReason value);
  
  
  
}
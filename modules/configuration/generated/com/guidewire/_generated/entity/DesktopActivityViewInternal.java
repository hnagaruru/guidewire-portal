package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DesktopActivityView.eti;DesktopActivityView.eix;DesktopActivityView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DesktopActivityViewInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the AssignedByUser field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getAssignedByUser();
  
  
  /**
   * Gets the value of the AssignedUserID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getAssignedUserID();
  
  
  /**
   * Gets the value of the AssignmentStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AssignmentStatus getAssignmentStatus();
  
  
  /**
   * Gets the value of the CreateUserID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getCreateUserID();
  
  
  /**
   * Gets the value of the EscalationDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEscalationDate();
  
  
  /**
   * Gets the value of the JobId field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getJobId();
  
  
  /**
   * Gets the value of the JobNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobNumber();
  
  
  /**
   * Gets the value of the LastViewedDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastViewedDate();
  
  
  /**
   * Gets the value of the Priority field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Priority getPriority();
  
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ActivityStatus getStatus();
  
  
  /**
   * Gets the value of the Subject field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubject();
  
  
  /**
   * Gets the value of the UpdateTime field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime();
  
  
  /**
   * Gets the value of the UpdateUserID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getUpdateUserID();
  
  
  /**
   * Sets the value of the AssignedByUser field.
   */
  public void setAssignedByUser(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AssignedUserID field.
   */
  public void setAssignedUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AssignmentStatus field.
   */
  public void setAssignmentStatus(typekey.AssignmentStatus value);
  
  
  /**
   * Sets the value of the CreateUserID field.
   */
  public void setCreateUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EscalationDate field.
   */
  public void setEscalationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the JobId field.
   */
  public void setJobId(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the JobNumber field.
   */
  public void setJobNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the LastViewedDate field.
   */
  public void setLastViewedDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Priority field.
   */
  public void setPriority(typekey.Priority value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ActivityStatus value);
  
  
  /**
   * Sets the value of the Subject field.
   */
  public void setSubject(java.lang.String value);
  
  
  /**
   * Sets the value of the UpdateTime field.
   */
  public void setUpdateTime(java.util.Date value);
  
  
  /**
   * Sets the value of the UpdateUserID field.
   */
  public void setUpdateUserID(gw.pl.persistence.core.Key value);
  
  
  
}
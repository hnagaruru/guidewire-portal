package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyTermRestoreRequest.eti;PolicyTermRestoreRequest.eix;PolicyTermRestoreRequest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyTermRestoreRequestInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the PolicyTerm field.
   * The PolicyTerm requested to be retrieved from the archive.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Gets the value of the Reason field.
   * Reason that this user requested the PolicyTerm be retrieved from the Archive.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReason();
  
  
  /**
   * Gets the value of the RequestingUser field.
   * The user that initiated this request to restore from the archive.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getRequestingUser();
  
  
  public gw.pl.persistence.core.Key getRequestingUserID();
  
  
  /**
   * Gets the value of the ShouldCreateActivity field.
   * Flag to indicate whether an activity should be created when this request is processed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isShouldCreateActivity();
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Reason field.
   */
  public void setReason(java.lang.String value);
  
  
  /**
   * Sets the value of the RequestingUser field.
   */
  public void setRequestingUser(entity.User value);
  
  
  public void setRequestingUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ShouldCreateActivity field.
   */
  public void setShouldCreateActivity(java.lang.Boolean value);
  
  
  
}
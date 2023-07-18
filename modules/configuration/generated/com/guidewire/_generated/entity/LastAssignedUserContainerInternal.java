package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LastAssignedUserContainer.eti;LastAssignedUserContainer.eix;LastAssignedUserContainer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LastAssignedUserContainerInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the LastAccountGrp field.
   * The id of the last group that was assigned an account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastAccountGrp();
  
  
  public gw.pl.persistence.core.Key getLastAccountGrpID();
  
  
  /**
   * Gets the value of the LastAccountUser field.
   * The id of the last user that was assigned an account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastAccountUser();
  
  
  public gw.pl.persistence.core.Key getLastAccountUserID();
  
  
  /**
   * Gets the value of the LastJobGrp field.
   * The id of the last group that was assigned a job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastJobGrp();
  
  
  public gw.pl.persistence.core.Key getLastJobGrpID();
  
  
  /**
   * Gets the value of the LastJobUser field.
   * The id of the last user that was assigned a job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastJobUser();
  
  
  public gw.pl.persistence.core.Key getLastJobUserID();
  
  
  /**
   * Gets the value of the LastPolicyGrp field.
   * The id of the last group that was assigned a policy for pre-renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastPolicyGrp();
  
  
  public gw.pl.persistence.core.Key getLastPolicyGrpID();
  
  
  /**
   * Gets the value of the LastPolicyUser field.
   * The id of the last user that was assigned a policy for pre-renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastPolicyUser();
  
  
  public gw.pl.persistence.core.Key getLastPolicyUserID();
  
  
  /**
   * Sets the value of the LastAccountGrp field.
   */
  public void setLastAccountGrp(entity.Group value);
  
  
  public void setLastAccountGrpID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastAccountUser field.
   */
  public void setLastAccountUser(entity.User value);
  
  
  public void setLastAccountUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastJobGrp field.
   */
  public void setLastJobGrp(entity.Group value);
  
  
  public void setLastJobGrpID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastJobUser field.
   */
  public void setLastJobUser(entity.User value);
  
  
  public void setLastJobUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastPolicyGrp field.
   */
  public void setLastPolicyGrp(entity.Group value);
  
  
  public void setLastPolicyGrpID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastPolicyUser field.
   */
  public void setLastPolicyUser(entity.User value);
  
  
  public void setLastPolicyUserID(gw.pl.persistence.core.Key value);
  
  
  
}
package entity;

/**
 * LastAssignedUserContainer
 * Delegate that can be implemented by any entity that has a containing relationship with assigned users.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LastAssignedUserContainer.eti;LastAssignedUserContainer.eix;LastAssignedUserContainer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface LastAssignedUserContainer extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.LastAssignedUserContainer> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.LastAssignedUserContainer>("entity.LastAssignedUserContainer");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTACCOUNTGRP_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("LastAccountGrp", "LastAccountGrpID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTACCOUNTUSER_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("LastAccountUser", "LastAccountUserID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTJOBGRP_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("LastJobGrp", "LastJobGrpID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTJOBUSER_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("LastJobUser", "LastJobUserID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTPOLICYGRP_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("LastPolicyGrp", "LastPolicyGrpID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTPOLICYUSER_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("LastPolicyUser", "LastPolicyUserID");
  
  /**
   * Gets the value of the LastAccountGrp field.
   * The id of the last group that was assigned an account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastAccountGrp();
  
  
  /**
   * Gets the value of the LastAccountUser field.
   * The id of the last user that was assigned an account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastAccountUser();
  
  
  /**
   * Gets the value of the LastJobGrp field.
   * The id of the last group that was assigned a job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastJobGrp();
  
  
  /**
   * Gets the value of the LastJobUser field.
   * The id of the last user that was assigned a job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastJobUser();
  
  
  /**
   * Gets the value of the LastPolicyGrp field.
   * The id of the last group that was assigned a policy for pre-renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastPolicyGrp();
  
  
  /**
   * Gets the value of the LastPolicyUser field.
   * The id of the last user that was assigned a policy for pre-renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastPolicyUser();
  
  
  /**
   * Sets the value of the LastAccountGrp field.
   */
  public void setLastAccountGrp(entity.Group value);
  
  
  /**
   * Sets the value of the LastAccountUser field.
   */
  public void setLastAccountUser(entity.User value);
  
  
  /**
   * Sets the value of the LastJobGrp field.
   */
  public void setLastJobGrp(entity.Group value);
  
  
  /**
   * Sets the value of the LastJobUser field.
   */
  public void setLastJobUser(entity.User value);
  
  
  /**
   * Sets the value of the LastPolicyGrp field.
   */
  public void setLastPolicyGrp(entity.Group value);
  
  
  /**
   * Sets the value of the LastPolicyUser field.
   */
  public void setLastPolicyUser(entity.User value);
  
  
  
}
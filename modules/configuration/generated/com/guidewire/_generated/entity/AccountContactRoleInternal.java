package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountContactRole.eti;AccountContactRole.eix;AccountContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountContactRoleInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.ReferenceableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.account.AccountContactRoleInternalMethods, com.guidewire.pc.domain.account.AccountContactRolePublicMethods, com.guidewire.pc.domain.archiving.impl.ReferenceableInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.api.domain.account.AccountContactRoleMethods, gw.api.domain.account.Mergeable, gw.api.domain.archiving.MergeableReferenceable, gw.api.logicalmatch.LogicalMatcher {
  /**
   * Adds the given element to the Replaces array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToReplaces(entity.AccountContactRoleReplacement element);
  
  
  /**
   * Gets the value of the AccountContact field.
   * The account contact that plays this role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContact getAccountContact();
  
  
  public gw.pl.persistence.core.Key getAccountContactID();
  
  
  /**
   * Gets the value of the Replaces field.
   * The roles that this AccountContactRole has replaced through merges
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContactRoleReplacement[] getReplaces();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountContactRole getSubtype();
  
  
  /**
   * Removes the given element from the Replaces array. This is achieved by marking the element for removal.
   */
  public void removeFromReplaces(entity.AccountContactRoleReplacement element);
  
  
  /**
   * Removes the given element from the Replaces array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromReplaces(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AccountContact field.
   */
  public void setAccountContact(entity.AccountContact value);
  
  
  public void setAccountContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Replaces field.
   */
  public void setReplaces(entity.AccountContactRoleReplacement[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.AccountContactRole value);
  
  
  
}
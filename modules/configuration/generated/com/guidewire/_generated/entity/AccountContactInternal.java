package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountContact.eti;AccountContact.eix;AccountContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountContactInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.account.AccountContactPublicMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.api.domain.account.Mergeable, gw.api.logicalmatch.LogicalMatcher {
  /**
   * Adds the given element to the Roles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoles(entity.AccountContactRole element);
  
  
  /**
   * Gets the value of the Account field.
   * The account on which this is a contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the Contact field.
   * The related contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getContact();
  
  
  public gw.pl.persistence.core.Key getContactID();
  
  
  /**
   * Gets the value of the LastUpdateTime field.
   * Date and time of last update
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastUpdateTime();
  
  
  /**
   * Gets the value of the Roles field.
   * The roles that this contact has played on the account or its policies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContactRole[] getRoles();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountContact getSubtype();
  
  
  /**
   * Gets the value of the TemporaryLastUpdateTime field.
   * Temporary date and time of last update; will eventually be copied to the LastUpdateTime during commit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTemporaryLastUpdateTime();
  
  
  /**
   * Gets the value of the Active field.
   * Determines whether or not the contact is available to be added to jobs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isActive();
  
  
  /**
   * Removes the given element from the Roles array. This is achieved by marking the element for removal.
   */
  public void removeFromRoles(entity.AccountContactRole element);
  
  
  /**
   * Removes the given element from the Roles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRoles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Active field.
   */
  public void setActive(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.Contact value);
  
  
  public void setContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastUpdateTime field.
   */
  public void setLastUpdateTime(java.util.Date value);
  
  
  /**
   * Sets the value of the Roles field.
   */
  public void setRoles(entity.AccountContactRole[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.AccountContact value);
  
  
  /**
   * Sets the value of the TemporaryLastUpdateTime field.
   */
  public void setTemporaryLastUpdateTime(java.util.Date value);
  
  
  
}
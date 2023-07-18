package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountAccount.eti;AccountAccount.eix;AccountAccount.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountAccountInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.account.AccountAccountPublicMethods, com.guidewire.pc.domain.account.impl.AccountAccountInternal {
  /**
   * Gets the value of the RelationshipType field.
   * The type of relationship from the perspective of the source account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountRelationshipType getRelationshipType();
  
  
  /**
   * Gets the value of the SourceAccount field.
   * The source account in the relationship.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getSourceAccount();
  
  
  public gw.pl.persistence.core.Key getSourceAccountID();
  
  
  /**
   * Gets the value of the TargetAccount field.
   * The target account in the relationship.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getTargetAccount();
  
  
  public gw.pl.persistence.core.Key getTargetAccountID();
  
  
  /**
   * Sets the value of the RelationshipType field.
   */
  public void setRelationshipType(typekey.AccountRelationshipType value);
  
  
  /**
   * Sets the value of the SourceAccount field.
   */
  public void setSourceAccount(entity.Account value);
  
  
  public void setSourceAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TargetAccount field.
   */
  public void setTargetAccount(entity.Account value);
  
  
  public void setTargetAccountID(gw.pl.persistence.core.Key value);
  
  
  
}
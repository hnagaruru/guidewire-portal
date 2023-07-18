package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountSummary.eti;AccountSummary.eix;AccountSummary.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountSummaryInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire.pc.domain.account.AccountSummaryPublicMethods {
  /**
   * Gets the value of the Account field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  /**
   * Gets the value of the AccountHolderAddress field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountHolderAddress();
  
  
  /**
   * Gets the value of the AccountHolderName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountHolderName();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the AccountNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumber();
  
  
  /**
   * Gets the value of the AccountStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountStatus getAccountStatus();
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  /**
   * Sets the value of the AccountHolderAddress field.
   */
  public void setAccountHolderAddress(java.lang.String value);
  
  
  /**
   * Sets the value of the AccountHolderName field.
   */
  public void setAccountHolderName(java.lang.String value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AccountNumber field.
   */
  public void setAccountNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the AccountStatus field.
   */
  public void setAccountStatus(typekey.AccountStatus value);
  
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIContract.eti;RIContract.eix;RIContract.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIContractInternal extends com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire.pc.domain.reinsurance.RIContractPublicMethods {
  /**
   * Gets the value of the Currency field.
   * Currency associated with the RI contract
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Gets the value of the Status field.
   * Status of the contract
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContractStatus getStatus();
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ContractStatus value);
  
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSchEquipAddlInterest.eti;IMSchEquipAddlInterest.eix;IMSchEquipAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMSchEquipAddlInterestInternal extends com.guidewire._generated.entity.AddlInterestDetailInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the ContractorsEquipment field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContractorsEquipment getContractorsEquipment();
  
  
  public gw.pl.persistence.core.Key getContractorsEquipmentID();
  
  
  /**
   * Sets the value of the ContractorsEquipment field.
   */
  public void setContractorsEquipment(entity.ContractorsEquipment value);
  
  
  public void setContractorsEquipmentID(gw.pl.persistence.core.Key value);
  
  
  
}
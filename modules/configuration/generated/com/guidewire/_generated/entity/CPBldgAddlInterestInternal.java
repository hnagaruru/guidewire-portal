package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBldgAddlInterest.eti;CPBldgAddlInterest.eix;CPBldgAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPBldgAddlInterestInternal extends com.guidewire._generated.entity.AddlInterestDetailInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the CPBuilding field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuilding getCPBuilding();
  
  
  public gw.pl.persistence.core.Key getCPBuildingID();
  
  
  /**
   * Sets the value of the CPBuilding field.
   */
  public void setCPBuilding(entity.CPBuilding value);
  
  
  public void setCPBuildingID(gw.pl.persistence.core.Key value);
  
  
  
}
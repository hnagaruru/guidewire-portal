package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBldgAddlInterest.eti;BOPBldgAddlInterest.eix;BOPBldgAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPBldgAddlInterestInternal extends com.guidewire._generated.entity.AddlInterestDetailInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BOPBuilding field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPBuilding getBOPBuilding();
  
  
  public gw.pl.persistence.core.Key getBOPBuildingID();
  
  
  /**
   * Sets the value of the BOPBuilding field.
   */
  public void setBOPBuilding(entity.BOPBuilding value);
  
  
  public void setBOPBuildingID(gw.pl.persistence.core.Key value);
  
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLocation.eti;PolicyLocation.eix;PolicyLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyLocationInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.AnswerContainerInternal, com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods, com.guidewire.pc.domain.policy.period.impl.PolicyLocationInternalMethods, com.guidewire.pl.system.entity.DoesNotValidateOnCommit, com.guidewire.pl.system.entity.LevelAwareValidatableBean, gw.api.copier.EffDatedCopyable, gw.api.domain.AnswerContainerAdapter, gw.api.domain.RefersOutOfDomainGraph, gw.api.domain.account.AccountSyncable, gw.api.effdate.UniqueOnPolicyPeriod, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.reinsurance.ReinsurableCoverable {
  /**
   * Adds the given element to the Buildings array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildings(entity.Building element);
  
  
  /**
   * Adds the given element to the LocationAnswers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationAnswers(entity.LocationAnswer element);
  
  
  /**
   * Adds the given element to the LocationNamedInsureds array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationNamedInsureds(entity.LocationNamedInsured element);
  
  
  /**
   * Adds the given element to the LocationRiskAssessments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationRiskAssessments(entity.LocationRiskAssessment element);
  
  
  /**
   * Adds the given element to the LocationRisks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationRisks(entity.LocationRisk element);
  
  
  /**
   * Adds the given element to the OutboundLocationRiskAssessmentTempStoreArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOutboundLocationRiskAssessmentTempStoreArray(entity.OutboundLocationRiskAssessmentTempStore element);
  
  
  /**
   * Adds the given element to the TerritoryCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTerritoryCodes(entity.TerritoryCode element);
  
  
  /**
   * Gets the value of the AccountLocation field.
   * The account location this policy location may be synced with.  While the policy location contains policy contract information, the account location contains shared role information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountLocation getAccountLocation();
  
  
  public gw.pl.persistence.core.Key getAccountLocationID();
  
  
  /**
   * Gets the value of the AddressLine1Internal field.
   * Address Line 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1Internal();
  
  
  /**
   * Gets the value of the AddressLine1KanjiInternal field.
   * Address Line 1 Kanji.  Used only for Japanese addresses and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1KanjiInternal();
  
  
  /**
   * Gets the value of the AddressLine2Internal field.
   * Address Line 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2Internal();
  
  
  /**
   * Gets the value of the AddressLine2KanjiInternal field.
   * Address Line 2 Kanji.  Used only for Japanese addresses and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2KanjiInternal();
  
  
  /**
   * Gets the value of the AddressLine3Internal field.
   * Address Line 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine3Internal();
  
  
  /**
   * Gets the value of the AddressTypeInternal field.
   * Type of this address record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AddressType getAddressTypeInternal();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the BuildingAutoNumberSeq field.
   * Sequence to autonumber buildings
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getBuildingAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getBuildingAutoNumberSeqID();
  
  
  /**
   * Gets the value of the Buildings field.
   * Set of buildings at a location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building[] getBuildings();
  
  
  /**
   * Gets the value of the CEDEXBureauInternal field.
   * CEDEX: Special business mail delivery bureau (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCEDEXBureauInternal();
  
  
  /**
   * Gets the value of the CityInternal field.
   * City.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityInternal();
  
  
  /**
   * Gets the value of the CityInternalDenorm field.
   * denorm field for CityInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityInternalDenorm();
  
  
  /**
   * Gets the value of the CityKanjiInternal field.
   * City Kanji.  Used only for Japanese addresses and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanjiInternal();
  
  
  /**
   * Gets the value of the CityKanjiInternalDenorm field.
   * denorm field for CityKanjiInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanjiInternalDenorm();
  
  
  /**
   * Gets the value of the CountryInternal field.
   * Country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountryInternal();
  
  
  /**
   * Gets the value of the CountyInternal field.
   * County.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCountyInternal();
  
  
  /**
   * Gets the value of the DescriptionInternal field.
   * Address Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescriptionInternal();
  
  
  /**
   * Gets the value of the EmployeeCountInternal field.
   * Employee Count
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getEmployeeCountInternal();
  
  
  /**
   * Gets the value of the FireProtectClass field.
   * Fire protection class.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FireProtectClass getFireProtectClass();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the IndustryCode field.
   * Industry Code of Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IndustryCode getIndustryCode();
  
  
  public gw.pl.persistence.core.Key getIndustryCodeID();
  
  
  /**
   * Gets the value of the LocationAnswers field.
   * Set of answers for this location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationAnswer[] getLocationAnswers();
  
  
  /**
   * Gets the value of the LocationNamedInsureds field.
   * The additional named insured covered at this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationNamedInsured[] getLocationNamedInsureds();
  
  
  /**
   * Gets the value of the LocationNum field.
   * The location number of this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLocationNum();
  
  
  /**
   * Gets the value of the LocationRiskAssessments field.
   * Risk assessment result for this policy location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationRiskAssessment[] getLocationRiskAssessments();
  
  
  /**
   * Gets the value of the LocationRisks field.
   * A reinsurable risk associated with a Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationRisk[] getLocationRisks();
  
  
  /**
   * Gets the value of the OutboundLocationRiskAssessmentTempStore field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundLocationRiskAssessmentTempStore getOutboundLocationRiskAssessmentTempStore();
  
  
  /**
   * Gets the value of the OutboundLocationRiskAssessmentTempStoreArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundLocationRiskAssessmentTempStore[] getOutboundLocationRiskAssessmentTempStoreArray();
  
  
  public gw.pl.persistence.core.Key getOutboundLocationRiskAssessmentTempStoreID();
  
  
  /**
   * Gets the value of the PostalCodeInternal field.
   * Postal code; string to handle Zip+4 and international codes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeInternal();
  
  
  /**
   * Gets the value of the PostalCodeInternalDenorm field.
   * denorm field for PostalCodeInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeInternalDenorm();
  
  
  /**
   * Gets the value of the StateInternal field.
   * State.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getStateInternal();
  
  
  /**
   * Gets the value of the TaxLocation field.
   * The TaxLocation for this location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TaxLocation getTaxLocation();
  
  
  public gw.pl.persistence.core.Key getTaxLocationID();
  
  
  /**
   * Gets the value of the TerritoryCodes field.
   * The rating territory codes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TerritoryCode[] getTerritoryCodes();
  
  
  /**
   * Gets the value of the ValidUntilInternal field.
   * Date Valid Until
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getValidUntilInternal();
  
  
  /**
   * Gets the value of the CEDEXInternal field.
   * CEDEX: Special business mail delivery flag (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEXInternal();
  
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildings(entity.Building element);
  
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildings(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LocationAnswers array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationAnswers(entity.LocationAnswer element);
  
  
  /**
   * Removes the given element from the LocationAnswers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationAnswers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationNamedInsureds(entity.LocationNamedInsured element);
  
  
  /**
   * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationNamedInsureds(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LocationRiskAssessments array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationRiskAssessments(entity.LocationRiskAssessment element);
  
  
  /**
   * Removes the given element from the LocationRiskAssessments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationRiskAssessments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationRisks(entity.LocationRisk element);
  
  
  /**
   * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationRisks(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the OutboundLocationRiskAssessmentTempStoreArray array. This is achieved by marking the element for removal.
   */
  public void removeFromOutboundLocationRiskAssessmentTempStoreArray(entity.OutboundLocationRiskAssessmentTempStore element);
  
  
  /**
   * Removes the given element from the OutboundLocationRiskAssessmentTempStoreArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOutboundLocationRiskAssessmentTempStoreArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TerritoryCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromTerritoryCodes(entity.TerritoryCode element);
  
  
  /**
   * Removes the given element from the TerritoryCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTerritoryCodes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AccountLocation field.
   */
  public void setAccountLocation(entity.AccountLocation value);
  
  
  public void setAccountLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AddressLine1Internal field.
   */
  public void setAddressLine1Internal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine1KanjiInternal field.
   */
  public void setAddressLine1KanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine2Internal field.
   */
  public void setAddressLine2Internal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine2KanjiInternal field.
   */
  public void setAddressLine2KanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine3Internal field.
   */
  public void setAddressLine3Internal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressTypeInternal field.
   */
  public void setAddressTypeInternal(typekey.AddressType value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PolicyLocation value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BuildingAutoNumberSeq field.
   */
  public void setBuildingAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setBuildingAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Buildings field.
   */
  public void setBuildings(entity.Building[] value);
  
  
  /**
   * Sets the value of the CEDEXBureauInternal field.
   */
  public void setCEDEXBureauInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the CEDEXInternal field.
   */
  public void setCEDEXInternal(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CityInternal field.
   */
  public void setCityInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the CityInternalDenorm field.
   */
  public void setCityInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the CityKanjiInternal field.
   */
  public void setCityKanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the CityKanjiInternalDenorm field.
   */
  public void setCityKanjiInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the CountryInternal field.
   */
  public void setCountryInternal(typekey.Country value);
  
  
  /**
   * Sets the value of the CountyInternal field.
   */
  public void setCountyInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the DescriptionInternal field.
   */
  public void setDescriptionInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the EmployeeCountInternal field.
   */
  public void setEmployeeCountInternal(java.lang.Integer value);
  
  
  /**
   * Sets the value of the FireProtectClass field.
   */
  public void setFireProtectClass(typekey.FireProtectClass value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PolicyLocation value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IndustryCode field.
   */
  public void setIndustryCode(entity.IndustryCode value);
  
  
  public void setIndustryCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LocationAnswers field.
   */
  public void setLocationAnswers(entity.LocationAnswer[] value);
  
  
  /**
   * Sets the value of the LocationNamedInsureds field.
   */
  public void setLocationNamedInsureds(entity.LocationNamedInsured[] value);
  
  
  /**
   * Sets the value of the LocationNum field.
   */
  public void setLocationNum(java.lang.Integer value);
  
  
  /**
   * Sets the value of the LocationRiskAssessments field.
   */
  public void setLocationRiskAssessments(entity.LocationRiskAssessment[] value);
  
  
  /**
   * Sets the value of the LocationRisks field.
   */
  public void setLocationRisks(entity.LocationRisk[] value);
  
  
  /**
   * Sets the value of the OutboundLocationRiskAssessmentTempStore field.
   */
  public void setOutboundLocationRiskAssessmentTempStore(entity.OutboundLocationRiskAssessmentTempStore value);
  
  
  /**
   * Sets the value of the OutboundLocationRiskAssessmentTempStoreArray field.
   */
  public void setOutboundLocationRiskAssessmentTempStoreArray(entity.OutboundLocationRiskAssessmentTempStore[] value);
  
  
  public void setOutboundLocationRiskAssessmentTempStoreID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PostalCodeInternal field.
   */
  public void setPostalCodeInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the PostalCodeInternalDenorm field.
   */
  public void setPostalCodeInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the StateInternal field.
   */
  public void setStateInternal(typekey.State value);
  
  
  /**
   * Sets the value of the TaxLocation field.
   */
  public void setTaxLocation(entity.TaxLocation value);
  
  
  public void setTaxLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TerritoryCodes field.
   */
  public void setTerritoryCodes(entity.TerritoryCode[] value);
  
  
  /**
   * Sets the value of the ValidUntilInternal field.
   */
  public void setValidUntilInternal(java.util.Date value);
  
  
  
}
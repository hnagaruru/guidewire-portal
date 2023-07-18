package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLocation.eti;PolicyLocation.eix;PolicyLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyLocationVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyLocationVersionList {
  public PolicyLocationVersionListImpl(entity.PolicyLocation base)  {
    super(base);
  }
  
  public PolicyLocationVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyLocation AsOf(java.util.Date date) {
    return (entity.PolicyLocation)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Building> BuildingsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyLocation.BUILDINGS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationAnswer> LocationAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyLocation.LOCATIONANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyLocation.LOCATIONNAMEDINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationRiskAssessment> LocationRiskAssessmentsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyLocation.LOCATIONRISKASSESSMENTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationRisk> LocationRisksAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyLocation.LOCATIONRISKS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TerritoryCode> TerritoryCodesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyLocation.TERRITORYCODES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBuildings(entity.Building bean) {
    addToArray(entity.PolicyLocation.BUILDINGS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLocationAnswers(entity.LocationAnswer bean) {
    addToArray(entity.PolicyLocation.LOCATIONANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLocationNamedInsureds(entity.LocationNamedInsured bean) {
    addToArray(entity.PolicyLocation.LOCATIONNAMEDINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLocationRiskAssessments(entity.LocationRiskAssessment bean) {
    addToArray(entity.PolicyLocation.LOCATIONRISKASSESSMENTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLocationRisks(entity.LocationRisk bean) {
    addToArray(entity.PolicyLocation.LOCATIONRISKS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToTerritoryCodes(entity.TerritoryCode bean) {
    addToArray(entity.PolicyLocation.TERRITORYCODES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLocation> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BuildingVersionList> getBuildings() {
    return (java.util.List)getArray(entity.PolicyLocation.BUILDINGS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationAnswerVersionList> getLocationAnswers() {
    return (java.util.List)getArray(entity.PolicyLocation.LOCATIONANSWERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds() {
    return (java.util.List)getArray(entity.PolicyLocation.LOCATIONNAMEDINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationRiskAssessmentVersionList> getLocationRiskAssessments() {
    return (java.util.List)getArray(entity.PolicyLocation.LOCATIONRISKASSESSMENTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationRiskVersionList> getLocationRisks() {
    return (java.util.List)getArray(entity.PolicyLocation.LOCATIONRISKS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.TerritoryCodeVersionList> getTerritoryCodes() {
    return (java.util.List)getArray(entity.PolicyLocation.TERRITORYCODES_PROP.get());
  }
  
  
}
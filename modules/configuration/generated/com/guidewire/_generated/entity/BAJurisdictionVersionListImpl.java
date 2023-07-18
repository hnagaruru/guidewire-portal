package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisdiction.eti;BAJurisdiction.eix;BAJurisdiction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAJurisdictionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAJurisdictionVersionList {
  public BAJurisdictionVersionListImpl(entity.BAJurisdiction base)  {
    super(base);
  }
  
  public BAJurisdictionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAJurisdiction AsOf(java.util.Date date) {
    return (entity.BAJurisdiction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAJurisModifier> BAJurisModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisdiction.BAJURISMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisdiction.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAJurisdictionCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisdiction.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisdiction.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisdiction.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAHiredAutoBasis> HiredAutoBasisArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisdiction.HIREDAUTOBASISARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BANonOwnedBasis> NonOwnedBasisArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisdiction.NONOWNEDBASISARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBAJurisModifiers(entity.BAJurisModifier bean) {
    addToArray(entity.BAJurisdiction.BAJURISMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.BAStateCond bean) {
    addToArray(entity.BAJurisdiction.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BAJurisdictionCost bean) {
    addToArray(entity.BAJurisdiction.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.BAStateCov bean) {
    addToArray(entity.BAJurisdiction.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.BAStateExcl bean) {
    addToArray(entity.BAJurisdiction.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHiredAutoBasisArray(entity.BAHiredAutoBasis bean) {
    addToArray(entity.BAJurisdiction.HIREDAUTOBASISARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToNonOwnedBasisArray(entity.BANonOwnedBasis bean) {
    addToArray(entity.BAJurisdiction.NONOWNEDBASISARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAJurisdiction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAJurisModifierVersionList> getBAJurisModifiers() {
    return (java.util.List)getArray(entity.BAJurisdiction.BAJURISMODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAStateCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.BAJurisdiction.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAJurisdictionCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BAJurisdiction.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAStateCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.BAJurisdiction.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAStateExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.BAJurisdiction.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAHiredAutoBasisVersionList> getHiredAutoBasisArray() {
    return (java.util.List)getArray(entity.BAJurisdiction.HIREDAUTOBASISARRAY_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BANonOwnedBasisVersionList> getNonOwnedBasisArray() {
    return (java.util.List)getArray(entity.BAJurisdiction.NONOWNEDBASISARRAY_PROP.get());
  }
  
  
}
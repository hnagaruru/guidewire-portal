package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCJurisdiction.eti;WCJurisdiction.eix;WCJurisdiction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCJurisdictionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCJurisdictionVersionList {
  public WCJurisdictionVersionListImpl(entity.WCJurisdiction base)  {
    super(base);
  }
  
  public WCJurisdictionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCJurisdiction AsOf(java.util.Date date) {
    return (entity.WCJurisdiction)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCJurisdictionCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCJurisdiction.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCStateCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCJurisdiction.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.RatingPeriodStartDate> RatingPeriodStartDatesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCJurisdiction.RATINGPERIODSTARTDATES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCModifier> WCModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCJurisdiction.WCMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.WCJurisdictionCost bean) {
    addToArray(entity.WCJurisdiction.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.WCStateCov bean) {
    addToArray(entity.WCJurisdiction.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRatingPeriodStartDates(entity.RatingPeriodStartDate bean) {
    addToArray(entity.WCJurisdiction.RATINGPERIODSTARTDATES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCModifiers(entity.WCModifier bean) {
    addToArray(entity.WCJurisdiction.WCMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCJurisdiction> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCJurisdictionCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.WCJurisdiction.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCStateCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.WCJurisdiction.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.RatingPeriodStartDateVersionList> getRatingPeriodStartDates() {
    return (java.util.List)getArray(entity.WCJurisdiction.RATINGPERIODSTARTDATES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCModifierVersionList> getWCModifiers() {
    return (java.util.List)getArray(entity.WCJurisdiction.WCMODIFIERS_PROP.get());
  }
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRetrospectiveRatingPlan.eti;WCRetrospectiveRatingPlan.eix;WCRetrospectiveRatingPlan.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCRetrospectiveRatingPlanVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCRetrospectiveRatingPlanVersionList {
  public WCRetrospectiveRatingPlanVersionListImpl(entity.WCRetrospectiveRatingPlan base)  {
    super(base);
  }
  
  public WCRetrospectiveRatingPlanVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCRetrospectiveRatingPlan AsOf(java.util.Date date) {
    return (entity.WCRetrospectiveRatingPlan)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCRetroRatingLetterOfCredit> LettersOfCreditAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCRetrospectiveRatingPlan.LETTERSOFCREDIT_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCStateMultiplier> StateMultipliersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCRetrospectiveRatingPlan.STATEMULTIPLIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLettersOfCredit(entity.WCRetroRatingLetterOfCredit bean) {
    addToArray(entity.WCRetrospectiveRatingPlan.LETTERSOFCREDIT_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToStateMultipliers(entity.WCStateMultiplier bean) {
    addToArray(entity.WCRetrospectiveRatingPlan.STATEMULTIPLIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCRetrospectiveRatingPlan> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCRetroRatingLetterOfCreditVersionList> getLettersOfCredit() {
    return (java.util.List)getArray(entity.WCRetrospectiveRatingPlan.LETTERSOFCREDIT_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCStateMultiplierVersionList> getStateMultipliers() {
    return (java.util.List)getArray(entity.WCRetrospectiveRatingPlan.STATEMULTIPLIERS_PROP.get());
  }
  
  
}
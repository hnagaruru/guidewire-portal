package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RatingPeriodStartDate.eti;RatingPeriodStartDate.eix;RatingPeriodStartDate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class RatingPeriodStartDateVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.RatingPeriodStartDateVersionList {
  public RatingPeriodStartDateVersionListImpl(entity.RatingPeriodStartDate base)  {
    super(base);
  }
  
  public RatingPeriodStartDateVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.RatingPeriodStartDate AsOf(java.util.Date date) {
    return (entity.RatingPeriodStartDate)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.RatingPeriodStartDate> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
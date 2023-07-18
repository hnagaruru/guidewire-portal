package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationRiskAssessment.eti;LocationRiskAssessment.eix;LocationRiskAssessment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class LocationRiskAssessmentVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.LocationRiskAssessmentVersionList {
  public LocationRiskAssessmentVersionListImpl(entity.LocationRiskAssessment base)  {
    super(base);
  }
  
  public LocationRiskAssessmentVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.LocationRiskAssessment AsOf(java.util.Date date) {
    return (entity.LocationRiskAssessment)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationRiskAssessment> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
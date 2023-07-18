package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExposureField.eti;APDRiskExposureField.eix;APDRiskExposureField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskExposureFieldVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskExposureFieldVersionList {
  public APDRiskExposureFieldVersionListImpl(entity.APDRiskExposureField base)  {
    super(base);
  }
  
  public APDRiskExposureFieldVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskExposureField AsOf(java.util.Date date) {
    return (entity.APDRiskExposureField)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskExposureField> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
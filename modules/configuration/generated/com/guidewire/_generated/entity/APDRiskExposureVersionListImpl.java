package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExposure.eti;APDRiskExposure.eix;APDRiskExposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskExposureVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskExposureVersionList {
  public APDRiskExposureVersionListImpl(entity.APDRiskExposure base)  {
    super(base);
  }
  
  public APDRiskExposureVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskExposure AsOf(java.util.Date date) {
    return (entity.APDRiskExposure)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskExposureField> FieldsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskExposure.FIELDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToFields(entity.APDRiskExposureField bean) {
    addToArray(entity.APDRiskExposure.FIELDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskExposure> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskExposureFieldVersionList> getFields() {
    return (java.util.List)getArray(entity.APDRiskExposure.FIELDS_PROP.get());
  }
  
  
}
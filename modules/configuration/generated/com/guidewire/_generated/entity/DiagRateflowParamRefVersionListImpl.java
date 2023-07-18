package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DiagRateflowParamRef.eti;DiagRateflowParamRef.eix;DiagRateflowParamRef.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class DiagRateflowParamRefVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.DiagRateflowParamRefVersionList {
  public DiagRateflowParamRefVersionListImpl(entity.DiagRateflowParamRef base)  {
    super(base);
  }
  
  public DiagRateflowParamRefVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.DiagRateflowParamRef AsOf(java.util.Date date) {
    return (entity.DiagRateflowParamRef)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagRateflowParamRef> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
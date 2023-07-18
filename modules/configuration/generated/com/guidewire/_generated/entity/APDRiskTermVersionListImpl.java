package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskTerm.eti;APDRiskTerm.eix;APDRiskTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskTermVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskTermVersionList {
  public APDRiskTermVersionListImpl(entity.APDRiskTerm base)  {
    super(base);
  }
  
  public APDRiskTermVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskTerm AsOf(java.util.Date date) {
    return (entity.APDRiskTerm)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskTerm> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyRisk.eti;PolicyRisk.eix;PolicyRisk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyRiskVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyRiskVersionList {
  public PolicyRiskVersionListImpl(entity.PolicyRisk base)  {
    super(base);
  }
  
  public PolicyRiskVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyRisk AsOf(java.util.Date date) {
    return (entity.PolicyRisk)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyRisk> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
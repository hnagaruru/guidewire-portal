package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCParticipatingPlan.eti;WCParticipatingPlan.eix;WCParticipatingPlan.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCParticipatingPlanVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCParticipatingPlanVersionList {
  public WCParticipatingPlanVersionListImpl(entity.WCParticipatingPlan base)  {
    super(base);
  }
  
  public WCParticipatingPlanVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCParticipatingPlan AsOf(java.util.Date date) {
    return (entity.WCParticipatingPlan)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCParticipatingPlan> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
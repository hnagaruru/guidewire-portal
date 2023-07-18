package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDPolicyInvolvedParty.eti;APDPolicyInvolvedParty.eix;APDPolicyInvolvedParty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDPolicyInvolvedPartyVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDPolicyInvolvedPartyVersionList {
  public APDPolicyInvolvedPartyVersionListImpl(entity.APDPolicyInvolvedParty base)  {
    super(base);
  }
  
  public APDPolicyInvolvedPartyVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDPolicyInvolvedParty AsOf(java.util.Date date) {
    return (entity.APDPolicyInvolvedParty)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDPolicyInvolvedParty> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
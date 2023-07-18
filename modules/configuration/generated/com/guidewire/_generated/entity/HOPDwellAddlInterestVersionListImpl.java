package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellAddlInterest.eti;HOPDwellAddlInterest.eix;HOPDwellAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellAddlInterestVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellAddlInterestVersionList {
  public HOPDwellAddlInterestVersionListImpl(entity.HOPDwellAddlInterest base)  {
    super(base);
  }
  
  public HOPDwellAddlInterestVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellAddlInterest AsOf(java.util.Date date) {
    return (entity.HOPDwellAddlInterest)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellAddlInterest> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
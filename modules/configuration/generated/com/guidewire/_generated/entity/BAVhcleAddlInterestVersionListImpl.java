package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAVhcleAddlInterest.eti;BAVhcleAddlInterest.eix;BAVhcleAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAVhcleAddlInterestVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAVhcleAddlInterestVersionList {
  public BAVhcleAddlInterestVersionListImpl(entity.BAVhcleAddlInterest base)  {
    super(base);
  }
  
  public BAVhcleAddlInterestVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAVhcleAddlInterest AsOf(java.util.Date date) {
    return (entity.BAVhcleAddlInterest)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAVhcleAddlInterest> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
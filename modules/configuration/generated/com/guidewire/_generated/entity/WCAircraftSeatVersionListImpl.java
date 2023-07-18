package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCAircraftSeat.eti;WCAircraftSeat.eix;WCAircraftSeat.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCAircraftSeatVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCAircraftSeatVersionList {
  public WCAircraftSeatVersionListImpl(entity.WCAircraftSeat base)  {
    super(base);
  }
  
  public WCAircraftSeatVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCAircraftSeat AsOf(java.util.Date date) {
    return (entity.WCAircraftSeat)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCAircraftSeat> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
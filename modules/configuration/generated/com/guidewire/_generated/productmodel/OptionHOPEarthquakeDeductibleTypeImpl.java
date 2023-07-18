package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPEarthquake.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPEarthquakeDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPEarthquakeDeductibleType> implements productmodel.OptionHOPEarthquakeDeductibleType {
  public OptionHOPEarthquakeDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPEarthquake getCoverage() {
    return (productmodel.HOPEarthquake)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPEarthquake getHOPEarthquake() {
    return (productmodel.HOPEarthquake)getClause();
  }
  
  
}
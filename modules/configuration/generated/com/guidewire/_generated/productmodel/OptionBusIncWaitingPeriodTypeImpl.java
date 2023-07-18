package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BusIncChangeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBusIncWaitingPeriodTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBusIncWaitingPeriodType> implements productmodel.OptionBusIncWaitingPeriodType {
  public OptionBusIncWaitingPeriodTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BusIncChangeCov getBusIncChangeCov() {
    return (productmodel.BusIncChangeCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BusIncChangeCov getCoverage() {
    return (productmodel.BusIncChangeCov)getClause();
  }
  
  
}
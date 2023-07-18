package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgBusIncomeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionCPBldgBusIncomeCovPeriodTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionCPBldgBusIncomeCovPeriodType> implements productmodel.OptionCPBldgBusIncomeCovPeriodType {
  public OptionCPBldgBusIncomeCovPeriodTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBldgBusIncomeCov getCPBldgBusIncomeCov() {
    return (productmodel.CPBldgBusIncomeCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBldgBusIncomeCov getCoverage() {
    return (productmodel.CPBldgBusIncomeCov)getClause();
  }
  
  
}
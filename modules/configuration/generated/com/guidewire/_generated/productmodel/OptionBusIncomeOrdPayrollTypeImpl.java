package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBusIncPayrollCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBusIncomeOrdPayrollTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBusIncomeOrdPayrollType> implements productmodel.OptionBusIncomeOrdPayrollType {
  public OptionBusIncomeOrdPayrollTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPBusIncPayrollCov getBOPBusIncPayrollCov() {
    return (productmodel.BOPBusIncPayrollCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPBusIncPayrollCov getCoverage() {
    return (productmodel.BOPBusIncPayrollCov)getClause();
  }
  
  
}
package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBusIncExtCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBusIncomeExtendedTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBusIncomeExtendedType> implements productmodel.OptionBusIncomeExtendedType {
  public OptionBusIncomeExtendedTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPBusIncExtCov getBOPBusIncExtCov() {
    return (productmodel.BOPBusIncExtCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPBusIncExtCov getCoverage() {
    return (productmodel.BOPBusIncExtCov)getClause();
  }
  
  
}
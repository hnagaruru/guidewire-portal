package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPrinterCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPPrinterSalesTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPPrinterSalesType {
  public DirectBOPPrinterSalesTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPPrinterCov getBOPPrinterCov() {
    return (productmodel.BOPPrinterCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPPrinterCov getCoverage() {
    return (productmodel.BOPPrinterCov)getClause();
  }
  
  
}
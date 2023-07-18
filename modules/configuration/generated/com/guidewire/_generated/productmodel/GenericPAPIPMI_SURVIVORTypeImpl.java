package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAPIPMI_SURVIVORTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAPIPMI_SURVIVORType {
  public GenericPAPIPMI_SURVIVORTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MI getCoverage() {
    return (productmodel.PAPIP_MI)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MI getPAPIP_MI() {
    return (productmodel.PAPIP_MI)getClause();
  }
  
  
}
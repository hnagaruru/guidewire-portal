package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPLiabilityCov extends entity.BusinessOwnersCov {
  protected BOPLiabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPLiabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPLiabilityCov");
  }
  
  public BOPLiabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPLiabilityCov");
  }
  
  public productmodel.TypekeyBOPLiabDeductTypeType getBOPLiabDeductTypeTerm() {
    return (productmodel.TypekeyBOPLiabDeductTypeType)getCovTerm("BOPLiabDeductType");
  }
  
  public productmodel.OptionBOPLiabPDDeductibleType getBOPLiabPDDeductibleTerm() {
    return (productmodel.OptionBOPLiabPDDeductibleType)getCovTerm("BOPLiabPDDeductible");
  }
  
  public productmodel.PackageBOPLiabilityType getBOPLiabilityTerm() {
    return (productmodel.PackageBOPLiabilityType)getCovTerm("BOPLiability");
  }
  
  public boolean getHasBOPLiabDeductTypeTerm() {
    return hasCovTerm("BOPLiabDeductType");
  }
  
  public boolean getHasBOPLiabPDDeductibleTerm() {
    return hasCovTerm("BOPLiabPDDeductible");
  }
  
  public boolean getHasBOPLiabilityTerm() {
    return hasCovTerm("BOPLiability");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPLiabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPLiabilityCov>() {
      public productmodel.BOPLiabilityCov newEmptyInstance() {
        return new productmodel.BOPLiabilityCov();
      }
      
      
    });
  }
}
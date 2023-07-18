package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_DE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_DE extends entity.BAStateCov {
  protected CAPIP_DE()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_DE(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_DE");
  }
  
  public CAPIP_DE(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_DE");
  }
  
  public productmodel.PackageBAPIP_DE_LIMType getBAPIP_DE_LIMTerm() {
    return (productmodel.PackageBAPIP_DE_LIMType)getCovTerm("BAPIP_DE_LIM");
  }
  
  public boolean getHasBAPIP_DE_LIMTerm() {
    return hasCovTerm("BAPIP_DE_LIM");
  }
  
  public boolean getHasPIP_DE_Deduct_WhoAppliesTerm() {
    return hasCovTerm("PIP_DE_Deduct_WhoApplies");
  }
  
  public boolean getHasPIP_DE_DeductibleTerm() {
    return hasCovTerm("PIP_DE_Deductible");
  }
  
  public productmodel.TypekeyPIP_DE_Deduct_WhoAppliesType getPIP_DE_Deduct_WhoAppliesTerm() {
    return (productmodel.TypekeyPIP_DE_Deduct_WhoAppliesType)getCovTerm("PIP_DE_Deduct_WhoApplies");
  }
  
  public productmodel.OptionPIP_DE_DeductibleType getPIP_DE_DeductibleTerm() {
    return (productmodel.OptionPIP_DE_DeductibleType)getCovTerm("PIP_DE_Deductible");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_DEInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_DE>() {
      public productmodel.CAPIP_DE newEmptyInstance() {
        return new productmodel.CAPIP_DE();
      }
      
      
    });
  }
}
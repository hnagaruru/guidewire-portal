package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAComprehensiveCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAComprehensiveCov extends entity.PersonalVehicleCov {
  protected PAComprehensiveCov()  {
    super((java.lang.Void)null);
  }
  
  public PAComprehensiveCov(entity.PolicyPeriod branch)  {
    super(branch, "PAComprehensiveCov");
  }
  
  public PAComprehensiveCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAComprehensiveCov");
  }
  
  public boolean getHasPACompDeductibleTerm() {
    return hasCovTerm("PACompDeductible");
  }
  
  public boolean getHasPACompZeroGlassTerm() {
    return hasCovTerm("PACompZeroGlass");
  }
  
  public productmodel.OptionPACompDeductibleType getPACompDeductibleTerm() {
    return (productmodel.OptionPACompDeductibleType)getCovTerm("PACompDeductible");
  }
  
  public productmodel.GenericPACompZeroGlassType getPACompZeroGlassTerm() {
    return (productmodel.GenericPACompZeroGlassType)getCovTerm("PACompZeroGlass");
  }
  
  static {
    com.guidewire._generated.productmodel.PAComprehensiveCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAComprehensiveCov>() {
      public productmodel.PAComprehensiveCov newEmptyInstance() {
        return new productmodel.PAComprehensiveCov();
      }
      
      
    });
  }
}
package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUMBICov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAOwnedUMBICov extends entity.BAStateCov {
  protected BAOwnedUMBICov()  {
    super((java.lang.Void)null);
  }
  
  public BAOwnedUMBICov(entity.PolicyPeriod branch)  {
    super(branch, "BAOwnedUMBICov");
  }
  
  public BAOwnedUMBICov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAOwnedUMBICov");
  }
  
  public productmodel.PackageBAOwnedUMBIType getBAOwnedUMBITerm() {
    return (productmodel.PackageBAOwnedUMBIType)getCovTerm("BAOwnedUMBI");
  }
  
  public productmodel.GenericBAOwnedUMConversionType getBAOwnedUMConversionTerm() {
    return (productmodel.GenericBAOwnedUMConversionType)getCovTerm("BAOwnedUMConversion");
  }
  
  public productmodel.GenericBAOwnedUMStackType getBAOwnedUMStackTerm() {
    return (productmodel.GenericBAOwnedUMStackType)getCovTerm("BAOwnedUMStack");
  }
  
  public productmodel.GenericBAOwnedUMStackUIMType getBAOwnedUMStackUIMTerm() {
    return (productmodel.GenericBAOwnedUMStackUIMType)getCovTerm("BAOwnedUMStackUIM");
  }
  
  public productmodel.GenericBAUMEconomicOnlyType getBAUMEconomicOnlyTerm() {
    return (productmodel.GenericBAUMEconomicOnlyType)getCovTerm("BAUMEconomicOnly");
  }
  
  public boolean getHasBAOwnedUMBITerm() {
    return hasCovTerm("BAOwnedUMBI");
  }
  
  public boolean getHasBAOwnedUMConversionTerm() {
    return hasCovTerm("BAOwnedUMConversion");
  }
  
  public boolean getHasBAOwnedUMStackTerm() {
    return hasCovTerm("BAOwnedUMStack");
  }
  
  public boolean getHasBAOwnedUMStackUIMTerm() {
    return hasCovTerm("BAOwnedUMStackUIM");
  }
  
  public boolean getHasBAUMEconomicOnlyTerm() {
    return hasCovTerm("BAUMEconomicOnly");
  }
  
  static {
    com.guidewire._generated.productmodel.BAOwnedUMBICovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAOwnedUMBICov>() {
      public productmodel.BAOwnedUMBICov newEmptyInstance() {
        return new productmodel.BAOwnedUMBICov();
      }
      
      
    });
  }
}
package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_NY extends entity.PersonalAutoCov {
  protected PAPIP_NY()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_NY(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_NY");
  }
  
  public PAPIP_NY(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_NY");
  }
  
  public boolean getHasPAPIPNY_DEATHTerm() {
    return hasCovTerm("PAPIPNY_DEATH");
  }
  
  public boolean getHasPAPIPNY_DEDUCTIBLETerm() {
    return hasCovTerm("PAPIPNY_DEDUCTIBLE");
  }
  
  public boolean getHasPAPIPNY_EXMEDTerm() {
    return hasCovTerm("PAPIPNY_EXMED");
  }
  
  public boolean getHasPAPIPNY_EXPENSETerm() {
    return hasCovTerm("PAPIPNY_EXPENSE");
  }
  
  public boolean getHasPAPIPNY_INCOMETerm() {
    return hasCovTerm("PAPIPNY_INCOME");
  }
  
  public boolean getHasPAPIPNY_MOTORCYCLETerm() {
    return hasCovTerm("PAPIPNY_MOTORCYCLE");
  }
  
  public boolean getHasPAPIPNY_OBELTerm() {
    return hasCovTerm("PAPIPNY_OBEL");
  }
  
  public boolean getHasPAPIP_NY_AGGREGATETerm() {
    return hasCovTerm("PAPIP_NY_AGGREGATE");
  }
  
  public productmodel.OptionPAPIPNY_DEATHType getPAPIPNY_DEATHTerm() {
    return (productmodel.OptionPAPIPNY_DEATHType)getCovTerm("PAPIPNY_DEATH");
  }
  
  public productmodel.OptionPAPIPNY_DEDUCTIBLEType getPAPIPNY_DEDUCTIBLETerm() {
    return (productmodel.OptionPAPIPNY_DEDUCTIBLEType)getCovTerm("PAPIPNY_DEDUCTIBLE");
  }
  
  public productmodel.GenericPAPIPNY_EXMEDType getPAPIPNY_EXMEDTerm() {
    return (productmodel.GenericPAPIPNY_EXMEDType)getCovTerm("PAPIPNY_EXMED");
  }
  
  public productmodel.OptionPAPIPNY_EXPENSEType getPAPIPNY_EXPENSETerm() {
    return (productmodel.OptionPAPIPNY_EXPENSEType)getCovTerm("PAPIPNY_EXPENSE");
  }
  
  public productmodel.OptionPAPIPNY_INCOMEType getPAPIPNY_INCOMETerm() {
    return (productmodel.OptionPAPIPNY_INCOMEType)getCovTerm("PAPIPNY_INCOME");
  }
  
  public productmodel.GenericPAPIPNY_MOTORCYCLEType getPAPIPNY_MOTORCYCLETerm() {
    return (productmodel.GenericPAPIPNY_MOTORCYCLEType)getCovTerm("PAPIPNY_MOTORCYCLE");
  }
  
  public productmodel.OptionPAPIPNY_OBELType getPAPIPNY_OBELTerm() {
    return (productmodel.OptionPAPIPNY_OBELType)getCovTerm("PAPIPNY_OBEL");
  }
  
  public productmodel.OptionPAPIP_NY_AGGREGATEType getPAPIP_NY_AGGREGATETerm() {
    return (productmodel.OptionPAPIP_NY_AGGREGATEType)getCovTerm("PAPIP_NY_AGGREGATE");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_NYInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_NY>() {
      public productmodel.PAPIP_NY newEmptyInstance() {
        return new productmodel.PAPIP_NY();
      }
      
      
    });
  }
}
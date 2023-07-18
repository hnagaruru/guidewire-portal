package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_NY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_NY extends entity.BAStateCov {
  protected CAPIP_NY()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_NY(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_NY");
  }
  
  public CAPIP_NY(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_NY");
  }
  
  public productmodel.OptionCAPIP_NY_AGGREGATEType getCAPIP_NY_AGGREGATETerm() {
    return (productmodel.OptionCAPIP_NY_AGGREGATEType)getCovTerm("CAPIP_NY_AGGREGATE");
  }
  
  public boolean getHasCAPIP_NY_AGGREGATETerm() {
    return hasCovTerm("CAPIP_NY_AGGREGATE");
  }
  
  public boolean getHasNYPIP_EXPENSETerm() {
    return hasCovTerm("NYPIP_EXPENSE");
  }
  
  public boolean getHasPIPNY_DEATHTerm() {
    return hasCovTerm("PIPNY_DEATH");
  }
  
  public boolean getHasPIPNY_DEDUCTIBLETerm() {
    return hasCovTerm("PIPNY_DEDUCTIBLE");
  }
  
  public boolean getHasPIPNY_EXMEDTerm() {
    return hasCovTerm("PIPNY_EXMED");
  }
  
  public boolean getHasPIPNY_INCOMETerm() {
    return hasCovTerm("PIPNY_INCOME");
  }
  
  public boolean getHasPIPNY_MOTORCYCLETerm() {
    return hasCovTerm("PIPNY_MOTORCYCLE");
  }
  
  public boolean getHasPIPNY_OBELTerm() {
    return hasCovTerm("PIPNY_OBEL");
  }
  
  public productmodel.OptionNYPIP_EXPENSEType getNYPIP_EXPENSETerm() {
    return (productmodel.OptionNYPIP_EXPENSEType)getCovTerm("NYPIP_EXPENSE");
  }
  
  public productmodel.OptionPIPNY_DEATHType getPIPNY_DEATHTerm() {
    return (productmodel.OptionPIPNY_DEATHType)getCovTerm("PIPNY_DEATH");
  }
  
  public productmodel.OptionPIPNY_DEDUCTIBLEType getPIPNY_DEDUCTIBLETerm() {
    return (productmodel.OptionPIPNY_DEDUCTIBLEType)getCovTerm("PIPNY_DEDUCTIBLE");
  }
  
  public productmodel.GenericPIPNY_EXMEDType getPIPNY_EXMEDTerm() {
    return (productmodel.GenericPIPNY_EXMEDType)getCovTerm("PIPNY_EXMED");
  }
  
  public productmodel.OptionPIPNY_INCOMEType getPIPNY_INCOMETerm() {
    return (productmodel.OptionPIPNY_INCOMEType)getCovTerm("PIPNY_INCOME");
  }
  
  public productmodel.GenericPIPNY_MOTORCYCLEType getPIPNY_MOTORCYCLETerm() {
    return (productmodel.GenericPIPNY_MOTORCYCLEType)getCovTerm("PIPNY_MOTORCYCLE");
  }
  
  public productmodel.OptionPIPNY_OBELType getPIPNY_OBELTerm() {
    return (productmodel.OptionPIPNY_OBELType)getCovTerm("PIPNY_OBEL");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_NYInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_NY>() {
      public productmodel.CAPIP_NY newEmptyInstance() {
        return new productmodel.CAPIP_NY();
      }
      
      
    });
  }
}
package New.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import New.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: График
 */
@Entity(name = "IISNewГрафик")
@Table(schema = "public", name = "График")
public class Grafik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Явка")
    private Boolean явка;

    @Column(name = "IDсотрудника")
    private Integer idсотрудника;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Причина")
    private String причина;

    @Column(name = "Кол_часов")
    private Integer кол_часов;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;


    public Grafik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Boolean getЯвка() {
      return явка;
    }

    public void setЯвка(Boolean явка) {
      this.явка = явка;
    }

    public Integer getIDсотрудника() {
      return idсотрудника;
    }

    public void setIDсотрудника(Integer idсотрудника) {
      this.idсотрудника = idсотрудника;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getПричина() {
      return причина;
    }

    public void setПричина(String причина) {
      this.причина = причина;
    }

    public Integer getКол_часов() {
      return кол_часов;
    }

    public void setКол_часов(Integer кол_часов) {
      this.кол_часов = кол_часов;
    }


}